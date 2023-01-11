import {FunctionComponent, PropsWithChildren} from "react";

const Layout : FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <div style={{ margin: "auto", maxWidth: "700px" }}>
            {children}
        </div>
    );
}

export default Layout;