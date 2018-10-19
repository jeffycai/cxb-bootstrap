import pkgJson from './package.json'
import { actionMixin, registerComponent } from 'maka'
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import './style.less'
import './bootstrap.min.css'

const name = pkgJson.name

const state = {
    data: {
        input: 'hello'
    }
}

registerComponent('bootstrap', { Button, FormControl })

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onChange = (e) => {
        this.base.setState({ 'data.input': e.target.value })
        console.log(this.base.getState('data.input'))
    }
}

const view = {
    component: 'div',
    className: 'cxb-bootstrap',
    children: [{
        component: 'bootstrap.Button',
        variant: 'primary',
        children: 'Button'
    },{
        component: 'bootstrap.FormControl',
        value: '{{data.input}}',
        onChange: '{{$onChange}}'
    }]
}

export {
    name,
    state,
    action,
    view
}