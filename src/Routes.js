import { Switch, Route } from "react-router-dom";

import Article from "./Article";
import SCPList from "./SCPList";

const Routes = () => {
    return <Switch>
        <Route path={"/"} exact>
            <SCPList />
        </Route>
        <Route path={`/article/*`}>
            <Article />
        </Route>
    </Switch>
}

export default Routes