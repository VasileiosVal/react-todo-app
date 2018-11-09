import React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'

class DataForm extends React.Component {
    constructor(props){
        super(props)
        this.changeDesc = this.changeDesc.bind(this)
        this.changeNum = this.changeNum.bind(this)
        this.changeNote = this.changeNote.bind(this)
        this.persist = this.persist.bind(this)
        this.state = props.expense ? 
        {
            id: props.expense.id,
            description: props.expense.description,
            note: props.expense.note,
            amount: props.expense.amount.toString(),
            created_at: props.expense.created_at,
            error: undefined,
            prevDescription: props.expense.description
        }
        :
        {
            description: '',
            note: '',
            amount: '',
            created_at: 0,
            error: undefined
        }     
    }
    changeDesc(e){
        let data = e.target.value
        this.setState(()=>{
            return {
                description: data
            }
        })
    }
    changeNum(e){
        let data = e.target.value
        if(data.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>{
                return {
                    amount: data
                }
            })
        }
    }
    changeNote(e){
        let data = e.target.value
        this.setState(()=>{
            return {
                note: data
            }
        })
    }
    persist(e){
        e.preventDefault();
        if(!this.state.amount || !this.state.description){
            this.setState(()=>{
                return {
                    error: 'Provide description and amount'
                }
            })
        } else {
            let found = this.props.expenses.findIndex((expense)=>{
                return expense.description === this.state.description.trim()
            })
            if(this.state.prevDescription && this.state.prevDescription === this.state.description){
                found = -1
            }
            if(found > -1){
                this.setState(()=>{
                    return {
                        error: 'This expense exists. Please provide another one'
                    }
                })
            }else{
                this.setState(()=>{
                    return {
                        error: undefined
                    }
                })
                if(this.state.id){
                    this.props.editExp(this.state.id, {
                        description: this.state.description.trim(),
                        amount: parseFloat(this.state.amount),
                        note: this.state.note.trim()
                        })
                } else {
                    this.props.createExp({
                        description: this.state.description.trim(),
                        amount: parseFloat(this.state.amount),
                        note: this.state.note.trim(),
                        created_at: moment().format('x')
                    })
                }
               
            }   
        }
    }
    render(){
        return (
            <div>
            {this.state.error ? <h4>{this.state.error}</h4> : undefined}
            <form onSubmit={this.persist}>
            <p><input value={this.state.description} onChange={this.changeDesc} type='text' placeholder='give title'/></p>
            <p><input type='text' value={this.state.amount} onChange={this.changeNum} placeholder='amount'/></p>
            <p><textarea onChange={this.changeNote} value={this.state.note} placeholder='give optional text'></textarea></p>
            <p><button>submit</button></p>
            </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(DataForm)








// {moment().format('x')}