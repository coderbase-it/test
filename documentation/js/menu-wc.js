'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">coderbase-starter documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-94400bbec849fb0236bcd02a8c9e9590"' : 'data-target="#xs-components-links-module-AppModule-94400bbec849fb0236bcd02a8c9e9590"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-94400bbec849fb0236bcd02a8c9e9590"' :
                                            'id="xs-components-links-module-AppModule-94400bbec849fb0236bcd02a8c9e9590"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link">ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-3e832d6045b2fe0b5a1d06bb4d1c3143"' : 'data-target="#xs-components-links-module-ClientsModule-3e832d6045b2fe0b5a1d06bb4d1c3143"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-3e832d6045b2fe0b5a1d06bb4d1c3143"' :
                                            'id="xs-components-links-module-ClientsModule-3e832d6045b2fe0b5a1d06bb4d1c3143"' }>
                                            <li class="link">
                                                <a href="components/ItemClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListClientsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListClientsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageClientsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageClientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link">ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-dcbccd9cf40838c4288a99b9bb1c08ae"' : 'data-target="#xs-components-links-module-LoginModule-dcbccd9cf40838c4288a99b9bb1c08ae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-dcbccd9cf40838c4288a99b9bb1c08ae"' :
                                            'id="xs-components-links-module-LoginModule-dcbccd9cf40838c4288a99b9bb1c08ae"' }>
                                            <li class="link">
                                                <a href="components/PageLoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageLoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link">PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-2a6e2ffe9ffddebdb48ab41f88ef533e"' : 'data-target="#xs-components-links-module-PageNotFoundModule-2a6e2ffe9ffddebdb48ab41f88ef533e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-2a6e2ffe9ffddebdb48ab41f88ef533e"' :
                                            'id="xs-components-links-module-PageNotFoundModule-2a6e2ffe9ffddebdb48ab41f88ef533e"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link">PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrestationsModule.html" data-type="entity-link">PrestationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrestationsModule-eb4cef8a7e1d25bacd9be3292ba129fd"' : 'data-target="#xs-components-links-module-PrestationsModule-eb4cef8a7e1d25bacd9be3292ba129fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrestationsModule-eb4cef8a7e1d25bacd9be3292ba129fd"' :
                                            'id="xs-components-links-module-PrestationsModule-eb4cef8a7e1d25bacd9be3292ba129fd"' }>
                                            <li class="link">
                                                <a href="components/AddPrestationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddPrestationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormPrestationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormPrestationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemPrestationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemPrestationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListPrestationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListPrestationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageAddPrestationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageAddPrestationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagePrestationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagePrestationsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrestationsRoutingModule.html" data-type="entity-link">PrestationsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-0d041a470afcc4591e463c3b4ea6f4f6"' : 'data-target="#xs-components-links-module-SharedModule-0d041a470afcc4591e463c3b4ea6f4f6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-0d041a470afcc4591e463c3b4ea6f4f6"' :
                                            'id="xs-components-links-module-SharedModule-0d041a470afcc4591e463c3b4ea6f4f6"' }>
                                            <li class="link">
                                                <a href="components/ActionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonAddComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableauComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableauComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-0d041a470afcc4591e463c3b4ea6f4f6"' : 'data-target="#xs-directives-links-module-SharedModule-0d041a470afcc4591e463c3b4ea6f4f6"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-0d041a470afcc4591e463c3b4ea6f4f6"' :
                                        'id="xs-directives-links-module-SharedModule-0d041a470afcc4591e463c3b4ea6f4f6"' }>
                                        <li class="link">
                                            <a href="directives/StateDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">StateDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-0d041a470afcc4591e463c3b4ea6f4f6"' : 'data-target="#xs-pipes-links-module-SharedModule-0d041a470afcc4591e463c3b4ea6f4f6"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-0d041a470afcc4591e463c3b4ea6f4f6"' :
                                            'id="xs-pipes-links-module-SharedModule-0d041a470afcc4591e463c3b4ea6f4f6"' }>
                                            <li class="link">
                                                <a href="pipes/TotalPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TotalPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link">TemplatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemplatesModule-0791331680f2e2020c1330a1dc91288b"' : 'data-target="#xs-components-links-module-TemplatesModule-0791331680f2e2020c1330a1dc91288b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatesModule-0791331680f2e2020c1330a1dc91288b"' :
                                            'id="xs-components-links-module-TemplatesModule-0791331680f2e2020c1330a1dc91288b"' }>
                                            <li class="link">
                                                <a href="components/TemplateAComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemplateAComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateBComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemplateBComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link">UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-53c0c2fab4261d26195c6b0818ffbbc5"' : 'data-target="#xs-components-links-module-UiModule-53c0c2fab4261d26195c6b0818ffbbc5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-53c0c2fab4261d26195c6b0818ffbbc5"' :
                                            'id="xs-components-links-module-UiModule-53c0c2fab4261d26195c6b0818ffbbc5"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractData.html" data-type="entity-link">AbstractData</a>
                            </li>
                            <li class="link">
                                <a href="classes/Client.html" data-type="entity-link">Client</a>
                            </li>
                            <li class="link">
                                <a href="classes/Prestation.html" data-type="entity-link">Prestation</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ClientsService.html" data-type="entity-link">ClientsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrestationsService.html" data-type="entity-link">PrestationsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ClientI.html" data-type="entity-link">ClientI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PrestationI.html" data-type="entity-link">PrestationI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
