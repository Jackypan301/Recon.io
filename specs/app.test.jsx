import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/components/App.jsx';
import Votes from '../client/components/Votes.jsx';
import AllReviewModal from '../client/components/AllReviewModal.jsx';
import NavBar from '../client/components/Navbar.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<App/>', () => {
  it('contains Votes component', () => {
    let wrapper = shallow(<App />); // mount/render/shallow when applicable
    expect(wrapper.find(Votes).exists()).to.equal(true);
  });
  it('should render without throwing an error', function() {
    expect(shallow(<App />).contains(<AllReviewModal />)).to.equal(true);
  });
  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
  });
  it('renders NavBar', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).not.toBeEmptyRender();
  });
});


