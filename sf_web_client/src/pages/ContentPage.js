import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getContentPage } from "../actions/categories";
import { useEffect } from "react";
import './ContentPage.css';


const mapStateToProps = (state) => ({
    contentPage: state.categoryData.contentPage,
  });
  
  const mapDispatchToProps = dispatch => ({
    getContentPage: id => dispatch(getContentPage(id)),
});
  
function ContentPage({contentPage, getContentPage}) {

    const params = useParams();
    useEffect(() => {
        getContentPage(params.id);
    }, []);

    const ShowContentPageData = () => {
        return (
        <div className={"contentPageData"}>
                <h1>
                    {contentPage.title}
                </h1>
        <div dangerouslySetInnerHTML={{ __html: contentPage.body }} />
        </div>
        )
    }
    return (
        <div>
        { !contentPage ? <div/> : <ShowContentPageData/> }
        </div>
    ); }

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage);