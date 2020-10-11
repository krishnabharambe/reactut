import React, { Component } from 'react'
import { Container, Table } from 'react-bootstrap'
import axios from "axios";
export default class Crud extends Component {

    state = {
        articles: []
      };

      fetchArticles = () => {
        axios.get("http://127.0.0.1:8000/api/").then(res => {
          this.setState({
            articles: res.data
          });
        });
      }
    
      componentDidMount() {
        this.fetchArticles();

      }
    
    render() {

        const {articles} = this.state;

        return (
            <div>
                <h3 className="text-center my-3">React Crud With API</h3>
                <hr />
                <Container fluid>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                  
                            </tr>
                        </thead>
                        <tbody>

        {articles.map(article => <tr><td>{article.id}</td><td>{article.content}</td><td>{article.description}</td></tr>)}
                        
                            
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}
