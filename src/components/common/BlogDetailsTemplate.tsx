import { FC } from 'react';
// -------- custom hook -------- //
// -------- custom component -------- //
import FigureImage from 'components/reuseable/FigureImage';


const BlogDetailsTemplate: FC<any> = ({blog}) => {
  // used for image lightbox

  return (
    <div className="card">
      <FigureImage width={960} height={600} src={blog?.image} className="card-img-top" />

      <div className="card-body">
        <div className="classic-view">
          <article className="post">
            <div className="post-content mb-5">
              <h2 className="h1 mb-4">{blog?.title}</h2>           

            </div>

            <div style={{overflow:"scroll",width:"100%",boxSizing:"border-box"}}>
                 <div style={{color:"#757575",fontSize:"16px",width:"100%"}}  className="preview" dangerouslySetInnerHTML={{__html:`${blog?.description}`}}/>
            </div>

          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsTemplate;
