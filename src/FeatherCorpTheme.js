const cTangerine = 'HSL(26, 91%, 55%)';
const cTangerineLight = 'HSL(26, 91%, 93%)'; // lighter version of cTangerine
const cSolitude = 'HSL(230, 16%, 93%)';
const lightTheme = true;

export default {
  light: lightTheme,
  baseName: 'GreyLight',

  // base theme colors
  colors: {
    tabSelectedColor: cTangerine,
    focusColor: cTangerine,
    completeTaskColor: cTangerine,
    defaultButtonColor: cTangerine,
    flexBlueColor: cTangerine
  },

  // component overrides
  overrides: {

    // top header
    MainHeader: {
      Container: {
        background: cTangerine,
        color: cSolitude
      }
    },

    // left sidebar
    SideNav: {
      Container: {
        background: cSolitude,
        color: cTangerine
      },
      Button: {
        background: cSolitude,
        color: cTangerine,
        lightHover: !lightTheme
      },
      Icon: {
        color: cTangerine
      }
    },

    // admin plugin
    FlexAdmin: {
      DashboardCard: {
        Icon: {
          backgroundColor: cTangerineLight
        }
      }
    }

  }
};