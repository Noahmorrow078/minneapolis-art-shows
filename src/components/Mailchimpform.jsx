import react from 'react';
import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form'

export default function Mailchimpform() {
    return (
        <Mailchimp
            action='https://minneapolisartshows.us22.list-manage.com/subscribe/post-json?u=da40d9999e748cd96ec5758e4&id=de947ed77e'
            fields={[
                {
                    name: 'EMAIL',
                    placeholder: 'Email',
                    type: 'email',
                    required: true
                }
            ]}
        />
    );
}