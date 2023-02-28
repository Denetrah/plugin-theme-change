import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
import FeatherTheme from './FeatherCorpTheme';

import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
import reducers, { namespace } from './states';

const PLUGIN_NAME = 'ThemeChangePlugin';

export default class ThemeChangePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    this.registerReducers(manager);

    const options = { sortOrder: -1 };
    flex.AgentDesktopView.Panel1.Content.add(<CustomTaskListContainer key="ThemeChangePlugin-component" />, options);
  }
  async init(flex, manager) {
    // set logo
    flex.MainHeader.defaultProps.logoUrl =
      'https://tangerine-toad-5117.twil.io/assets/feathercorp-logo-white.svg';

      manager.updateConfig({ colorTheme: FeatherTheme });
  }
  async init(flex, manager) {

    /* ... */
  
    manager.strings.TaskHeaderLine =
      '{{task.attributes.account_data.first_name}} ' + 
      '{{task.attributes.account_data.last_name}}';
  
    manager.strings.TaskLineCallReserved =
      'SLA: {{task.attributes.account_data.service_level}}';
  }
  // suppose to display the orange them with the changes but insteat creates default theme
  async init(flex, manager) {

    /* ... */
  
    manager.strings.TaskHeaderLine =
      '{{task.attributes.account_data.first_name}} ' + 
      '{{task.attributes.account_data.last_name}}';
  
    manager.strings.TaskLineCallReserved =
      'SLA: {{task.attributes.account_data.service_level}}';
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint-disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
