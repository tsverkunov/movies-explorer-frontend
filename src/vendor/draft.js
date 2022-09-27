

///---searchForm---///

// const [values, setValues] = useState({ search: '' });
// const [errors, setErrors] = useState({ search: '' });
// const [isValid, setIsValid] = useState(false);
//
// const handleChange = (e) => {
//   const target = e.target;
//   const { name, value, validationMessage } = target;
//   setValues({ ...values, [name]: value });
//   setErrors({ ...errors, [name]: validationMessage });
//   setIsValid(target.closest('form').checkValidity());
// };

// useEffect(() => {
//   if (pathname === '/movies') {
//     // setShortMovie(localStorage.getItem(shortMovie))
//     // setValues({search: localStorage.getItem(searchWord)})
//
//     setValues({ search: savedSearchWord });
//     setShortMovie(savedShortMovie);
//   }
// }, []);

// useEffect(() => {
//   if (values.search) {
//     onGetMovies(values);
//   }
// }, [shortMovie]);

// const onSubmit = (e) => {
//   e.preventDefault();
//    onGetMovies(values);
// };