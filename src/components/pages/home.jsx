import React, { Component } from 'react';
import Axios from 'axios'
import {APIURL,TOKEN} from './../../support/apiurl'

class Home extends Component {
    state = {
        dataprov:[],
        datakab:[]
    }
    componentDidMount=()=>{
        Axios.get(`${APIURL}MeP7c5ne${TOKEN}/m/wilayah/provinsi`)
        .then((res)=>{
            this.setState({dataprov:res.data.data})
            // console.log(res.data)
            // console.log('masuk respon')
        }).catch((err)=>{
            console.log(err)
            // console.log('masuk error')
        })
    }
    renderProv=()=>{
        return this.state.dataprov.map((val,index)=>{
            return(
                <option value={val.id} key={index}>{val.name}</option>
            )
        })
    }
    renderKab=()=>{
        if(this.state.datakab.length===0){
            return <option>pilih provinsi dulu ya</option>
        }
        return this.state.datakab.map((val,index)=>{
            return(
                <option value={val.id} key={index}>{val.name}</option>
            )
        })
    }
    onProvChange=(e)=>{
        var idprov=e.target.value
        console.log(e.target.value)
        Axios.get(`${APIURL}MeP7c5ne${TOKEN}/m/wilayah/kabupaten?idpropinsi=${idprov}`)
        .then((res)=>{
            this.setState({datakab:res.data.data})
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        if(this.state.dataprov.length===0){
            return <div>Loading...</div>
        }
        return (
            <div className='mt-3'>
                <select onChange={this.onProvChange}>
                    <option selected hidden>pilih provinsi</option>
                    {this.renderProv()}
                </select>
                <select>
                    {/* <option selected hidden>pilih kabupaten</option> */}
                    {this.renderKab()}
                </select>
            </div>
        );
    }
}
 
export default Home;