import { FC } from 'react';
import '../stylesheets/workitem.css'

type Props = {
  title: string;
  description: string;
  tags: string[];
}
const WorkItem: FC<Props> = ({title,description,tags}) => {
 

    return (
          <div className="work-item">
            <div className="item-content">
              <h4 className="item-title">
                {title}
              </h4>
              <p className="item-description">
                {description}
             </p>
              <div className="item-tags">
              {tags.map((tag) => (
                  <p className="item-tag">{tag}</p>
                   ))}
              </div>
            </div>
          </div>

    )
  }
  
  export default WorkItem