import {Component} from "react";

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

class SelectedLanguage extends Component {
   
   handleClick = (event) => {
      this.props.selectOne(event);
   }

   render() {
      return (
          <>
              <ul className='languages'>
                  {languages.map((language, index) =>
                      <li
                          key={index}
                          style={{color: language === this.props.selectedLanguage ? '#d0021b' : '#000000'}}
                          onClick={this.handleClick}>
                          {language}
                      </li>)}
              </ul>
          </>
      )
  }
}

export default SelectedLanguage;