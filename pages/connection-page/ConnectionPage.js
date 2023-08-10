import ConnectStyle from "./ConnectionPage.module.css";
import {Constant} from "../Constant";
import Map from "../../component/Map";
import {useState} from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
// import MapLeaflet from "../../component/Map-leaflet/MapLeaflet";
import dynamic from 'next/dynamic'

const MapLeaflet = dynamic(() => import('../../component/Map-leaflet/MapLeaflet'), {ssr: false,})



const ConnectionPage = () => {
    const cookies = new Cookies();

    cookies.set('b-Id', { path: '/' });

    const [fields, setFields] = useState({
        name: "",
        mobile: "",
        email : "",
        message : "",
        picture : []
    });

    const apply = () => {
        axios.post('https://dfgsdfgsdfgj32gsdg.mehrpol.com/api/public/admin/contact-us', {
            "name": fields.name,
            "mobile": fields.mobile,
            "email": fields.email,
            "message": fields.message,
        }, {
            headers :{
                authorization : cookies.get("b-Id"),
                "Accept" : "application/json"
            }
        })
            .then(function (response) {
                console.log(response);
                alert("ok res")
            })
            .catch(function (error) {
                console.log(error);
                alert("not res")
            });
    }


    const handlerInput = (e) => {
        setFields({...fields, [e.target.name]: e.target.value})
        console.log({fields});
    }
    console.log({fields})
  return(
      <div className={ConnectStyle.nkWrapper}>
          <div className={ConnectStyle.nkWrapperTitDec}>
              <h5>{Constant.MehrpolTitle}</h5>
              <p>{Constant.MehrpolDec}</p>
          </div>

          <div className={ConnectStyle.nkBoxMapText}>
              <div className="container">
                  <div className="row">
                      <div className="col-md-10 col-sm-12 col-xl-7">
                          <form>
                              <div className={ConnectStyle.nkBoxForm}>
                                  <input
                                      type={"text"}
                                      className={ConnectStyle.Input}
                                      placeholder={Constant.Name}
                                      name='name'
                                      value={fields.name}
                                      onChange={(e) => {handlerInput(e)}}
                                  />
                                  <input
                                      type={"number"}
                                      className={ConnectStyle.Input}
                                      placeholder={Constant.Phone}
                                      name='mobile'
                                      value={fields.mobile}
                                      onChange={(e) => {handlerInput(e)}}
                                  />

                              </div>
                              <div className={ConnectStyle.nkBoxForm}>
                                  <input type={"email"}
                                         className={ConnectStyle.Input}
                                         placeholder={Constant.Email}
                                         name='email'
                                         value={fields.email}
                                         onChange={(e) => {handlerInput(e)}}
                                         style={{width: "100%", marginTop:"20px", padding: "7px"}}
                                  />
                              </div>
                              <div className={ConnectStyle.nkBoxDec}>
                                  <label>{Constant.WriteMessage}</label>
                                  <input type={"text"}
                                         className={ConnectStyle.nkInputDec}
                                         name='message'
                                         value={fields.message}
                                         onChange={(e) => {handlerInput(e)}}
                                  />
                              </div>

                              <div className={ConnectStyle.nkBoxAttach}>
                                  <div className={ConnectStyle.nkAttach}>
                                      <label htmlFor={"file"}>
                                          فایل پیوست
                                          {/*<i className="bi bi-paperclip" style={{color : "white", fontSize : "1rem"}}></i>*/}
                                      </label>
                                      <input id={"file"}
                                             type={"file"}
                                             name='picture'
                                             onChange={(e)=>{e.target.files && e.target.files[0]
                                             && setFields({...fields, picture: e.target.files[0]})}}
                                             style={{visibility: "hidden"}}
                                      />
                                  </div>
                                  <p>{Constant.Capacity}</p>
                              </div>

                              <div className={ConnectStyle.nkBoxForm} style={{marginTop:"10px"}}>
                                  <input type={"text"}  placeholder={Constant.InputCode}/>
                                  <label>5674546</label>
                              </div>
                              <div className={ConnectStyle.nkBoxBtn}>
                                  <button type="button" className="btn btn-primary" onClick={apply} >{Constant.SendMessage}</button>
                              </div>
                              <div className={ConnectStyle.nkBoxAddress}>
                                  <i className="bi bi-geo-alt"></i>
                                  <div>
                                      <h6>{Constant.Address1}</h6>
                                      <h6>{Constant.Address2}</h6>
                                      <h6>{Constant.Address3}</h6>
                                  </div>
                              </div>
                          </form>
                      </div>
                      <div className="col-md-10 col-sm-12 col-xl-5">
                          {/*<Map/>*/}
                          <MapLeaflet/>
                          <div className={ConnectStyle.PhoneEmail}>
                              <div>
                                  <i className="bi bi-telephone"></i>
                                  021-46138398
                              </div>
                              <div>
                                  <i className="bi bi-envelope-open"></i>
                                info@mehrpol.com
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ConnectionPage