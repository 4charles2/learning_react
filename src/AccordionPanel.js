import React, {Component} from 'react';
import PropTypes from "prop-types";


export default class Accordion extends Component{
    static propTypes = {
        items: PropTypes.arrayOf(ItemPropType).isRequired,
    }

    constructor(props) {
        super(props)
        this.state = { expandedPanels: new Set()}
    }

    render() {
        const { items } = this.props
        return (
            <div className="accordion">
                {items.map((item) => (
                    <AccordionPanel
                        key={item.id}
                        item={item}
                        onToggle={this.togglePanel}
                        open={this.state.expandedPanels.has(item)}
                    />
                ))}
            </div>
        )
    }

    togglePanel = (panel) => {
        const expandedPanels = this.state.expandedPanels
        if (expandedPanels.has(panel)){
            expandedPanels.remove(panel)
        } else {
            expandedPanels.add(panel)
        }
        this.setState({expandedPanels})
    }

}




export function AccordionPanel({ item: { title, content, }, open, onToggle}){
    return (
        <section className="accordion-panel">
            <h1 className="accordion-header" onClick={() => onToggle(item)} />
            <div className="accordion-content">{content}</div>
        </section>
    )
}

AccordionPanel.defaultProps = {
    open: false,
}
AccordionPanel.propTypes = {
    item: ItemPropType.isRequered,
    open: PropTypes.bool,
    onToggle: PropTypes.func.isRequired,
}