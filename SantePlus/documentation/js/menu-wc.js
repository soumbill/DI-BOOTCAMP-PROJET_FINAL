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
                    <a href="index.html" data-type="index-link">e-medical documentation</a>
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
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-a050a4ab18fadcb9dc6e04a350fee2d35f1c977c59dc20a083bda240600cb0d3526fd4fd27acaf32ec9ca0eed59934fa5686ca494e5db8286e93336db6e71c0f"' : 'data-target="#xs-components-links-module-AdminModule-a050a4ab18fadcb9dc6e04a350fee2d35f1c977c59dc20a083bda240600cb0d3526fd4fd27acaf32ec9ca0eed59934fa5686ca494e5db8286e93336db6e71c0f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-a050a4ab18fadcb9dc6e04a350fee2d35f1c977c59dc20a083bda240600cb0d3526fd4fd27acaf32ec9ca0eed59934fa5686ca494e5db8286e93336db6e71c0f"' :
                                            'id="xs-components-links-module-AdminModule-a050a4ab18fadcb9dc6e04a350fee2d35f1c977c59dc20a083bda240600cb0d3526fd4fd27acaf32ec9ca0eed59934fa5686ca494e5db8286e93336db6e71c0f"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SedemenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SedemenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f2a4c3e3c80dd0f11adb5dcd9d91f5308ab946f2e328180cd688475d9bfb429ccbc0a6a1b1b7559e834d9362eb3162e2ec0a0ab60c4f987d570341814666d77d"' : 'data-target="#xs-components-links-module-AppModule-f2a4c3e3c80dd0f11adb5dcd9d91f5308ab946f2e328180cd688475d9bfb429ccbc0a6a1b1b7559e834d9362eb3162e2ec0a0ab60c4f987d570341814666d77d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f2a4c3e3c80dd0f11adb5dcd9d91f5308ab946f2e328180cd688475d9bfb429ccbc0a6a1b1b7559e834d9362eb3162e2ec0a0ab60c4f987d570341814666d77d"' :
                                            'id="xs-components-links-module-AppModule-f2a4c3e3c80dd0f11adb5dcd9d91f5308ab946f2e328180cd688475d9bfb429ccbc0a6a1b1b7559e834d9362eb3162e2ec0a0ab60c4f987d570341814666d77d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-411f01fedf5cfd5425f896fb53b780d1052963cace35b0a0564cba3971973a9dfa9e6fbcf2410840c83afb097f6df2457f0bf27b57ce6332d8242288606889bd"' : 'data-target="#xs-components-links-module-AuthModule-411f01fedf5cfd5425f896fb53b780d1052963cace35b0a0564cba3971973a9dfa9e6fbcf2410840c83afb097f6df2457f0bf27b57ce6332d8242288606889bd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-411f01fedf5cfd5425f896fb53b780d1052963cace35b0a0564cba3971973a9dfa9e6fbcf2410840c83afb097f6df2457f0bf27b57ce6332d8242288606889bd"' :
                                            'id="xs-components-links-module-AuthModule-411f01fedf5cfd5425f896fb53b780d1052963cace35b0a0564cba3971973a9dfa9e6fbcf2410840c83afb097f6df2457f0bf27b57ce6332d8242288606889bd"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HoraireModule.html" data-type="entity-link" >HoraireModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HoraireModule-363f6fa0b1b6f6f553a9484942f10431c5f0e9dbf9c69950e11ecd1a4d87ee04436afc4b664bbd87e4fe9222b4a68130b3dc297e80bf134444ea9c1a316e9b61"' : 'data-target="#xs-components-links-module-HoraireModule-363f6fa0b1b6f6f553a9484942f10431c5f0e9dbf9c69950e11ecd1a4d87ee04436afc4b664bbd87e4fe9222b4a68130b3dc297e80bf134444ea9c1a316e9b61"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HoraireModule-363f6fa0b1b6f6f553a9484942f10431c5f0e9dbf9c69950e11ecd1a4d87ee04436afc4b664bbd87e4fe9222b4a68130b3dc297e80bf134444ea9c1a316e9b61"' :
                                            'id="xs-components-links-module-HoraireModule-363f6fa0b1b6f6f553a9484942f10431c5f0e9dbf9c69950e11ecd1a4d87ee04436afc4b664bbd87e4fe9222b4a68130b3dc297e80bf134444ea9c1a316e9b61"' }>
                                            <li class="link">
                                                <a href="components/HAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HoraireRoutingModule.html" data-type="entity-link" >HoraireRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MedecinModule.html" data-type="entity-link" >MedecinModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MedecinModule-39dc5111f2b53723c5fc83fb60bc98e40164cfb886d27d2820b53f1b98c442517d28e5fc7c3d1cbe9cdb6b64fdb81d55931c783b206c6f4024cbfce5823037c4"' : 'data-target="#xs-components-links-module-MedecinModule-39dc5111f2b53723c5fc83fb60bc98e40164cfb886d27d2820b53f1b98c442517d28e5fc7c3d1cbe9cdb6b64fdb81d55931c783b206c6f4024cbfce5823037c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MedecinModule-39dc5111f2b53723c5fc83fb60bc98e40164cfb886d27d2820b53f1b98c442517d28e5fc7c3d1cbe9cdb6b64fdb81d55931c783b206c6f4024cbfce5823037c4"' :
                                            'id="xs-components-links-module-MedecinModule-39dc5111f2b53723c5fc83fb60bc98e40164cfb886d27d2820b53f1b98c442517d28e5fc7c3d1cbe9cdb6b64fdb81d55931c783b206c6f4024cbfce5823037c4"' }>
                                            <li class="link">
                                                <a href="components/MAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MedecinRoutingModule.html" data-type="entity-link" >MedecinRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PatientModule.html" data-type="entity-link" >PatientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PatientModule-e627083240c483a5630b97a307ce62f7bf09f9368d4d8fe79bdbd6671d7c3a36ff271514b4e51996360b1056af75a74bcda2171a89f2f6e61955fa67c506ff81"' : 'data-target="#xs-components-links-module-PatientModule-e627083240c483a5630b97a307ce62f7bf09f9368d4d8fe79bdbd6671d7c3a36ff271514b4e51996360b1056af75a74bcda2171a89f2f6e61955fa67c506ff81"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PatientModule-e627083240c483a5630b97a307ce62f7bf09f9368d4d8fe79bdbd6671d7c3a36ff271514b4e51996360b1056af75a74bcda2171a89f2f6e61955fa67c506ff81"' :
                                            'id="xs-components-links-module-PatientModule-e627083240c483a5630b97a307ce62f7bf09f9368d4d8fe79bdbd6671d7c3a36ff271514b4e51996360b1056af75a74bcda2171a89f2f6e61955fa67c506ff81"' }>
                                            <li class="link">
                                                <a href="components/PAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatientRoutingModule.html" data-type="entity-link" >PatientRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-c224ef1ef35b2aa87ee538d4d43eb32c4850458cb19a5ea253830f5274d80e91bbb729194854add633c0a795481b42101c754ebea10c3bdad1f50af370f95a70"' : 'data-target="#xs-components-links-module-PublicModule-c224ef1ef35b2aa87ee538d4d43eb32c4850458cb19a5ea253830f5274d80e91bbb729194854add633c0a795481b42101c754ebea10c3bdad1f50af370f95a70"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-c224ef1ef35b2aa87ee538d4d43eb32c4850458cb19a5ea253830f5274d80e91bbb729194854add633c0a795481b42101c754ebea10c3bdad1f50af370f95a70"' :
                                            'id="xs-components-links-module-PublicModule-c224ef1ef35b2aa87ee538d4d43eb32c4850458cb19a5ea253830f5274d80e91bbb729194854add633c0a795481b42101c754ebea10c3bdad1f50af370f95a70"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HopitauxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HopitauxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HoraireComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HoraireComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MedecinComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MedecinComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublicHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublicHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublicLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublicLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RdvComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RdvComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpecialiteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpecialiteComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SpecialiteModule.html" data-type="entity-link" >SpecialiteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SpecialiteModule-81dd50dc835c688f3c3405c6ea6f50b28ee7cfc19fba2afa4bddf60e0247d8705a137be4ee3aca8a348f6122b8994e98ce4384b9a485e5e5399e6d6137e6e044"' : 'data-target="#xs-components-links-module-SpecialiteModule-81dd50dc835c688f3c3405c6ea6f50b28ee7cfc19fba2afa4bddf60e0247d8705a137be4ee3aca8a348f6122b8994e98ce4384b9a485e5e5399e6d6137e6e044"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SpecialiteModule-81dd50dc835c688f3c3405c6ea6f50b28ee7cfc19fba2afa4bddf60e0247d8705a137be4ee3aca8a348f6122b8994e98ce4384b9a485e5e5399e6d6137e6e044"' :
                                            'id="xs-components-links-module-SpecialiteModule-81dd50dc835c688f3c3405c6ea6f50b28ee7cfc19fba2afa4bddf60e0247d8705a137be4ee3aca8a348f6122b8994e98ce4384b9a485e5e5399e6d6137e6e044"' }>
                                            <li class="link">
                                                <a href="components/SAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpecialiteRoutingModule.html" data-type="entity-link" >SpecialiteRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-6924ad03b9acb690c113a4e7187d07123e61c81e0bade62bbf06f861b10caff2be19094e8e829286a85eedc335170f301fda63fe4546da065a3310664c4f2ec5"' : 'data-target="#xs-components-links-module-UserModule-6924ad03b9acb690c113a4e7187d07123e61c81e0bade62bbf06f861b10caff2be19094e8e829286a85eedc335170f301fda63fe4546da065a3310664c4f2ec5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-6924ad03b9acb690c113a4e7187d07123e61c81e0bade62bbf06f861b10caff2be19094e8e829286a85eedc335170f301fda63fe4546da065a3310664c4f2ec5"' :
                                            'id="xs-components-links-module-UserModule-6924ad03b9acb690c113a4e7187d07123e61c81e0bade62bbf06f861b10caff2be19094e8e829286a85eedc335170f301fda63fe4546da065a3310664c4f2ec5"' }>
                                            <li class="link">
                                                <a href="components/UAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
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