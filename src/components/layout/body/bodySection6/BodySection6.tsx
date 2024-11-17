
import ArticleCard from '@/components/common/bodyComponents/articleCard/ArticleCard'
import './BodySection6.css'
export default function BodySection6(){
    return(
        <div className='bodySection6-Container'>
            <div>
                <span className='BodySection6-Icon'></span>
                <h6 className='fs-1 text-light text-center'>
                    Our Gaming Magazine
                </h6>
            </div>
            <div className='BodySection6-article-layout'>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </div>
    )
}