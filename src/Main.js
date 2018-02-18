import React, { Component } from 'react';

const TOKEN = '6c0c200982141ec5caedb47e6f71349c8d6e582f';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            data: null,
            page: 1
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.page !== this.state.page)
            this.search(nextState.value, nextState.page)
    }

    search = (value, page) => {
        fetch(`https://api.github.com/search/users?access_token=${TOKEN}&q=${value}&page=${page}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    value: value,
                    data: res,
                });
                //redirect
            })
            .catch(err => console.log(err));
    }

    next = () => {
        this.setState({
            page: this.state.page + 1
        });
    }

    onInputChange = (e) => {
        const { value } = e.target;

        if (!value)
            return;

        this.search(value);
    }

    render() {
        const { data } = this.state; //деструктуризация
        return (
            <div className="Main">
                <input type="text" onChange={this.onInputChange}/> 
                <ul> {
                    data && data.items && data.items.map(({ id, login, avatar_url }) => (
                        <li className="list-item" key={id} >
                            <img className="img" src={avatar_url} alt={`${login} avatar`}/>
                            {login}
                        </li>
                    ))
                    }
                </ul>
                <button onClick={this.next} > NEXT, I WANT NEXT! </button>
            </div>
            );
    }
}
                
export default Main;