import React from 'react'
import {Route, Switch} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route  exact path="/categories" component={Categories} />
                    <Route exact path="/products" component={products} />
                    <Route exact path="/lookbooks" component={lookbooks} />
                    <Route exact path="/checkout" component={checkout} />
                </Switch>
            </div>
        )
    }
}


export default App