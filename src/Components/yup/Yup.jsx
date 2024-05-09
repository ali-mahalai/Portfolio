import * as yup from 'yup';

const validationSchema = yup.object({
    email:yup.string().email().required("ایمیل الزامی میباشد"),
    fullName:yup.string().required("نام و نام خانوادگی الزامی میباشد"),
    subject:yup.string().required("عنوان الزامی باشد"),
    post:yup.string().required("متن پیام الزامی میباشد")
})

export default validationSchema