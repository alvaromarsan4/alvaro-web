import React, {Component} from "react";
import Link from "next/link";

export default class Breadcrumbs extends Component {
    render() {
        return (
            <div className="breadcrumbs text-sm">
            <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href={this.props.enlace}>{this.props.pagina}</Link></li>
        </ul>
        </div>
    );
}
}
