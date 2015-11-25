// libraries
import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

// web components
import ScrollspyContainer from 'focus-components/components/scrollspy-container';
import {component as BackButton} from 'focus-components/common/button/back';
import {cartridgeBehaviour} from 'focus-components/page/mixin';

//views
import HeaderExpanded from './header-content-expanded';
import HeaderSummary from './header-content-summary';
import PersonBiography from './biography';
import PersonIdentity from './identity';
import PersonMovies from './movies';

export default React.createClass({
    displayName: 'PersonDetailView',
    propTypes: {
        id: PropTypes.number.isRequired
    },
    mixins: [cartridgeBehaviour],

    /** @inheritDoc */
    componentWillMount() {
        this._registerCartridge();
    },

    /**
    * Related to the CartridgeBehaviour.
    * Define the cartridge configuration.
    * @return {[type]} [description]
    */
    cartridgeConfiguration() {
        const props = { hasLoad: false }; //{id: this.props.id};
        return {
            barLeft: { component: BackButton },
            cartridge: { component: HeaderExpanded, props },
            summary: { component: HeaderSummary, props },
            actions: {
                primary: this._getGlobalPrimaryActions() || [],
                secondary: []
            }
        };
    },

    _getGlobalPrimaryActions() {
        const {id} = this.props;
        const url = `http://www.allocine.fr/personne/fichepersonne_gen_cpersonne=${id}.html`;
        const actions = [];
        actions.push({label: 'Allociné', icon: 'launch', action: () => { window.open(url,'_blank'); }});
        return actions;
    },

    /** @inheritDoc */
    render() {
        const {id} = this.props;
        return (
            <ScrollspyContainer gridContentSize={10} gridMenuSize={2}>
                <PersonIdentity id={id} />
                <PersonBiography id={id} />
                <PersonMovies id={id} />
            </ScrollspyContainer>
        );
    }
});
