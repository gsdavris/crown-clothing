import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { compose } from  'redux';

import { 
    selectIsCollectionsLoaded 
} from '../../redux/shop/shop.selector';

import WithSpinner from '../../components/with-spinner/with.spinner.component';
import CollectionPage from './collection.component';

const mapSateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer =  compose(
    connect(mapSateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
