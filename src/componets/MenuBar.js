class MenuBar extends React.Component {
    static defaultProps = {
        losPedidos: []
    }

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    openClose() {
        this.setState(prevState => (
            { show: !prevState.show }))
    }


    render() {
        return (
            <nav className="nav">
                <div className="nav-head">
                    <a className={"nav-button" + " " + (this.state.show ? "active" : null)} onClick={() => this.openClose()}><span>&#9776;</span></a>
                    <span>Wi-Yu</span>

                    {this.props.children}

                </div>

                {this.state.show && <div className="nav-body">
                    <ReactRouterDOM.HashRouter>
                        <Link to="/">Home</Link>
                        <Link to="/Inventary">Inventario</Link>
                        <Link to="/Transacciones">Transacciones</Link>
                        <Link to="/Clientes-y-Trabajadores">Clientes y Trabajadores</Link>
                    </ReactRouterDOM.HashRouter>
                </div>}
            </nav >
        );
    }
}