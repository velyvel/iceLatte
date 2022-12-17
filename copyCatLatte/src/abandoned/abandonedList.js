import {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

const AbandonedList = () => {

    const [abLists, setAbLists] = useState(null);
    const clickHandler = async () => {

        const serviceKey = "eMVfxUA%2FWCe5PDwQ%2FyOQYpyG8CN7YSnS5d1WIsyaPbpWB8XA5Y3frj21E9fUde73lxbrhL%2FZOZxxQveKRpOFkQ%3D%3D";
        const url= `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${serviceKey}&_type=json`;
        const response = await axios.get(url);
        setAbLists(response.data.response.body.items.item);

    };

    return(
        <div>
            <button type={"button"} className="btn btn-secondary" onClick={clickHandler}>유기동물 리스트</button>
                <br/><br/>
            <table className="table table-hover">
                <thead>
                    <th>종</th>
                    <th>보호장소</th>
                    <th>사진</th>
                    <th>발견장소</th>
                    <th>보호상태</th>
                    <th>중성화여부</th>
                </thead>
                <tbody>
                { abLists ?
                    abLists.map( (item, idx) => (
                        <tr key={idx}>
                            <td>{ item.kindCd }</td>
                            <td>{ item.careNm }</td>
                            <td><img src={item.filename} alt={item.filename}/></td>
                            {/* <td><a href={item.filename}>{item.filename }</a></td> */}
                            <td>{ item.orgNm }</td>
                            <td>{ item.processState }</td>
                            <td>{ item.neuterYn }</td>
                        </tr>
                        )
                    )
                    :
                    <tr><td colSpan={6}/></tr>
                }
                </tbody>
            </table>



        </div>
    );
};
export default AbandonedList;