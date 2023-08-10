import styleTable from "./Example.module.css"

export default function Example() {
    return (
        <table className="table">
            <thead className={styleTable.nkHeade}>
            <tr>
                <th scope="col">ردیف</th>
                <th scope="col">مشاهده</th>
                <th scope="col">نام و نام خانوادگی</th>
                <th scope="col">ایمیل</th>
                <th scope="col">تلفن</th>
                <th scope="col">تاریخ</th>
                <th scope="col">متن پیام</th>
                <th scope="col">تنظیمات</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>
                    <div className={styleTable.nkBoxSee} style={{backgroundColor: "green"}}>خیر</div>
                </td>
                <td>مهرداد باقری</td>
                <td>m.bagheri@gmail.com</td>
                <td>09124445678</td>
                <td>1401/4/27</td>
                <td style={{fontSize: "0.6rem"}}>گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما </td>
                <td>
                    <i className="bi bi-trash3 " style={{color: "red"}}></i>
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>
                    <div className={styleTable.nkBoxSee} style={{backgroundColor: "pink"}}>بله</div>
                </td>
                <td>شیما گلی</td>
                <td>m.goli@gmail.com</td>
                <td>09124445678</td>
                <td>1401/4/27</td>
                <td style={{fontSize: "0.6rem"}}>گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما </td>
                <td>
                    <i className="bi bi-trash3 " style={{color: "red"}}></i>
                </td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>
                    <div className={styleTable.nkBoxSee} style={{backgroundColor: "green"}}>خیر</div>
                </td>
                <td>نگار کرمی</td>
                <td>n.karami@gmail.com</td>
                <td>09124445678</td>
                <td>1401/4/27</td>
                <td style={{fontSize: "0.6rem"}}>گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما </td>
                <td>
                    <i className="bi bi-trash3 " style={{color: "red"}}></i>
                </td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>
                    <div className={styleTable.nkBoxSee} style={{backgroundColor: "plum"}}>خیر</div>
                </td>
                <td> سمیرا حسن پور</td>
                <td>s.hasanpoor@gmail.com</td>
                <td>09124445678</td>
                <td>1401/4/27</td>
                <td style={{fontSize: "0.6rem"}}>گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما </td>
                <td>
                    <i className="bi bi-trash3 " style={{color: "red"}}></i>
                </td>
            </tr>
            </tbody>
        </table>
    );
}