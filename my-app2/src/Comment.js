import React, { Component } from 'react';

export default class Comment extends Component
{
    render()
    {
        return(
            <div className="comment">
                <div className="avatar">
                    <img src={this.props.avatar} alt=""/>
                </div>
                {this.props.content}
            </div>
        )
    }
}
