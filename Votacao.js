import React, { Component } from 'react';
import { Button } from 'react-native';


class Votacao extends Component{

    
    render(){
        return(
            <div>
                <h4>Votação de cidades</h4>
                <a>Fortaleza:</a>
                <br></br>
                <a>Quixadá:</a>
                <br></br>
                <a>Limoeiro:</a>
                <br></br>
                <a>Juazeiro:</a>
                <br></br>
                <br></br>
                <a>MAIS VOTADAS(a):</a>
                <br></br>
                <a>MENOS VOTADAS(a):</a>
                <br></br>
                <br></br>
                <Button title="Fortaleza"/>
                <br></br>
                <Button title="Quixadá"/>
                <br></br>
                <Button title="Limoeiro"/>
                <br></br>
                <Button title="Juazeiro"/>
            </div>
        )
    }
}
export default Votacao;