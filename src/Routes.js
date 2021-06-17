import { Switch, Route } from "react-router-dom";

import Article from "./Article";
import SCPList from "./SCPList";

const prefix = process.env.REACT_APP_REPOSITORY

const Routes = () => {
    return <Switch>
        <Route path={"/" + prefix} exact>
            <SCPList />
        </Route>
        <Route path={`/${prefix}/article/*`}>
            <Article />
        </Route>
    </Switch>
}

export default Routes