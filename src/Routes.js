import { Switch, Route, useLocation } from "react-router-dom";

import Article from "./Article";
import SCPList from "./SCPList";


const Routes = () => {
    const loc = useLocation()
    console.table(loc)
    return <Switch>
        <Route path="/" exact>
            <SCPList />
        </Route>
        <Route path="/article/*">
            <Article />
        </Route>
    </Switch>
}

export default Routes