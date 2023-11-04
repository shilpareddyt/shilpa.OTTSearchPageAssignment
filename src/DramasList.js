import { useEffect, useState } from 'react'
import poster1 from './assets/poster1.jpg'
import poster2 from './assets/poster2.jpg'
import poster3 from './assets/poster3.jpg'
import InfiniteScroll from 'react-infinite-scroller'
const dramas = {
    "page": {
        "title": "Romantic Comedy",
        "total-content-items": "54",
        "page-num-requested": "1",
        "page-size-requested": "20",
        "page-size-returned": "20",
        "content-items": {
            "content": [
                {
                    "name": "The Birds",
                    "poster-image": poster1
                },
                {
                    "name": "Rear Window",
                    "poster-image": poster2
                },
                {
                    "name": "Family Pot",
                    "poster-image": poster3
                },
                {
                    "name": "Family Pot",
                    "poster-image": poster2
                },
                {
                    "name": "Rear Window",
                    "poster-image": poster1
                },
                {
                    "name": "The Birds",
                    "poster-image": poster3
                },
                {
                    "name": "Rear Window",
                    "poster-image": poster3
                },
                {
                    "name": "The Birds",
                    "poster-image": poster2
                },
                {
                    "name": "Family Pot",
                    "poster-image": poster1
                },
            
            ]
        }
    }
}
function DramasList({ searchText }) {
    const [dramasList, setDramasList] = useState(dramas.page["content-items"].content);
    const loading = async () => {
        //as there is no api call we are managing with mock data
        const newDramasList = [
            {
                "name": "The Birds",
                "poster-image": poster1
            },
            {
                "name": "Rear Window",
                "poster-image": poster2
            },
            {
                "name": "Family Pot",
                "poster-image": poster3
            },
            {
                "name": "Family Pot",
                "poster-image": poster2
            },
            {
                "name": "Rear Window",
                "poster-image": poster1
            },
            {
                "name": "The Birds",
                "poster-image": poster3
            },
            {
                "name": "Rear Window",
                "poster-image": poster3
            },
            {
                "name": "The Birds",
                "poster-image": poster2
            },
            {
                "name": "Family Pot",
                "poster-image": poster1
            },
        ]
        if (searchText !== '') {
            let newFilteredDramas = newDramasList.filter((drama) => drama.name.toLowerCase().includes(searchText.toLowerCase()))
            console.log("filtereddramas", newFilteredDramas)
            await setDramasList((dramasList) => [...dramasList, ...newFilteredDramas])
        }
        if (searchText === '') {
            await setDramasList((dramasList) => [...dramasList, ...newDramasList]);
        }

    }
    useEffect(() => {
        if (searchText !== '') {
            let newFilteredDramas = dramas.page["content-items"].content.filter((drama) => drama.name.toLowerCase().includes(searchText.toLowerCase()))
            console.log("filtereddramas", newFilteredDramas)
            setDramasList(newFilteredDramas);
        }
        if (searchText === '') {
            setDramasList(dramas.page["content-items"].content);
        }
    }, [searchText]
    )
    return (<InfiniteScroll
        pageStart={0}
        loadMore={loading}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
    >
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 bg-bodybg py-20 pr-2 pl-2'>
            {dramasList.map((drama) => {
                return <div >
                    <img src={drama["poster-image"]} alt="poster1image" />
                    <div className='text-textcolor'>{drama["name"]}</div>

                </div>

            })}
        </div>
    </InfiniteScroll>);

}
export default DramasList;