import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import ColorList  from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";



const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/colors">
                    <ColorList />
                </Route>
                <Route exact path="/colors/new">
                    <NewColorForm />
                </Route>
                <Route path="/colors/:name">
                    <Color />
                </Route>
                <Redirect to="/colors" />
            </Switch>
        </BrowserRouter>
    );
    
}

export default Routes;