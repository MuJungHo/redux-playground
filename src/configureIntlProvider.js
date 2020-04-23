import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl'
import enLocale from "react-intl/locale-data/en"
import zhLocale from "react-intl/locale-data/zh"
import en from './i18n/en'
import zh from './i18n/zh'

addLocaleData([...enLocale, ...zhLocale])

function mapStateToProps(state) {
  const { locale } = state.locale
  let messages
  switch (locale) {
      case 'en':
        messages = en
        break;
    case 'zh':
        messages = zh
        break;
      default:
        messages = en
        break;
  }
  return { locale, messages }
}

export default connect(mapStateToProps)(IntlProvider)