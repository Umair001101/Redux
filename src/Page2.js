import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from './selectedItemsSlice';
const Page2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const handleSelectItem = (item) => {
    setSelectedItems((prevItems) =>
      prevItems.includes(item) ? prevItems.filter(i => i !== item) : [...prevItems, item]
    );
    dispatch(addItem(item));
  };
  const handleNext = () => {
    navigate('/page3');
  };
  const handlePrevious = () => {
    navigate('/page1');
  };
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Page 2</h1>
      <h2 style={styles.subtitle}>Select Your Samsung Phone</h2>
      <div style={styles.imagesContainer}>
        {[
          { name: 'Samsung Galaxy S21', price: '$499', img: 'data:image/jpeg;base64,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' },
          { name: 'Samsung Galaxy S22', price: '$699', img: 'data:image/jpeg;base64,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' },
          { name: 'Samsung Galaxy S23 Ultra', price: '$999', img: 'data:image/jpeg;base64,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' },
          { name: 'Samsung Galaxy S24 Ultra', price: '$1199', img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBAQDxAQEA8QEhAQDQ8PEA8PDw8QFREWFhUVFRUYHSggGBolGxUVITEhJikrMC4uGB8zODMtNygtLisBCgoKDg0OFxAPGC0dFR0rLi0tKysrNy0tKy0rLSsrLS0tKy0rKy0tNy0rKysrLSstKy0tLSs3KystKy0tKy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBAgUEA//EAE4QAAEDAgIEBwoIDAUFAAAAAAEAAgMEEQUhBhIxUQcyQWFxcoETIjNSkZOhsbTTFBcjYpKzwdEWJEJDU1RjgoSi0vCywsPh8RUlNESj/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAeEQEBAAIDAQEBAQAAAAAAAAAAAQIREjFBIRMyUf/aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFH9JcfdTOaAGkOYXZtLiXa7WgcYWFiTy7FIFBOEfjRdT/UarOwOnUniM+gf61qdO5PEZ9B39ahkkrGNfJK8RxRN15ZCL6rbgZD8pxJAA5SRs2iJz8IMIcQyjkdHfJz6lrJSN9hGWt6O+6St2YxVunT2X9Gz6Dv61g6fS/o4/oO/rUDocRhnjbNA4mNxLSHgCSN4tdjwMr5g3GRBvvA2nqGsaXPe1jRYFz3NY252C5O3I5cyvHHWxODwgS/o2fQd/WsfGFJ+jZ9B39agsc7XtDmOa9pvZzHNe022i4yuhcrwgnPxhyfo2fQd/WvJivCp8HbE6SEvMzpQxsUQdZsYYSXF0o2l/JuUOJXG0x4tD01fqhWcsJNCdfHU39Un8zH79Dw1D9Um8yz3yqqML7GNX84qzDw2D9Um80z3yN4bLmwpJfNM98qrlZZaQcYKcEW/wDG9JYH4DPY7PkWZ/8A2WreGN5JaKKa7baw7ky4uLj89uXCg0cNXh7AyUwv1z34BNw0i7SAQbG/IRsC8ulGC/BRBUAue1rWU9U47XeJIee979YLX5CVfG9J+oz+aj98nxvSfqM/mY/fKE2WbKfnETb43X/qNR5mP36yOF1/6lUeZj9+oRZAE/OG1y6EaV/9QaZAzUZqk6rmaj2vbK9jgQHuB4oO3lUpVYcCXgH9M/tcqs9cgREQEREBERAREQFA+EnjRdT/AFAp4oFwl8aPqf6jVZ3FirtOGuOHy6l7MnppJQD+aDZmXtuD5I/pBVvHIzVIdYEZg56xy4ttyt55yIyzBaQQHNc0izmuacnNIyIKjsmiNOSZG051L3OrNIIQegtJA5tYreWN3uDnaAte2OVxvqSSxhg3ljJNYjo1rdq309hkcIXtBdFGJNewJ1HOLe+PMQAL/N51I6anDALBosNVrWjVYxu5o+1e3DqQTSsjLgzWJ748lgTlzm1u1XjrH6IXoNFK0SFwc2OQsLA641rB13AbswL8vYbSouX2xClbDLJG1weGnjgW1sgc+fk7F5SVrGfBsSuLptJaOhPzqr1QrrErh6en5Gg61V6oVM/BzqaQFe1gUdpKix5l36WS4WsarWoYvGwd8F0pW5LyGPNWxFraFTgUMYJzMstuwN+9dyroWTwyQvF2ytLT2jIqs6PEjFDTC9h3SpPoh+9TrA8WDwM1018KgFJA9mvDJ4SBxY7naDkfUe1faykWmVKI52VLRlINWTdfkJ/vlXCe0bW8U5j7li/6j5WSy3sgCgnPAl4F/TP7XKrPVY8CfgX9M/tcqs5eYEREBERAREQEREBQDhNcNaMXzDASN15Rb1FT9V5wnHvm9Rv1oVncWK+xXEm01PLUFrXuaY4oGOF2Omk1i0vHK1rY3utykNByJVe1GkVe93dTV1WsSQ1zZpWAG19VoaQG2BGQAAU4x2j+EU0kAIDy6OaAuIa0yxh41CTkNZsjxc8obvVdfBJ2PMboJBLxSxzHB177iFrPv6id6O446qiJlt3eJzWSuaA0StcHFryBkHd64G23vTtuTvjOLNpwwFjpZJSe5xscGmwtdxNjymwAGeey2fh0bw10DC1/hXuD5gM+5hoIaw/O74k7rc6+mkOEioawh2pJHrBriLtc056rrZixzBF9py3am+Kvvg+MsqGuLWmNzCA9jnB+RBIc1wAuMjyZc917i5cfBMLMOuXO13vILzYNbkCAGjd3xzPNkLZ9QuWsd6+jZzl4dKKF87KGONpc78cfqi1yAIb2v0r0krpUh+Xw7qV/qgUz8FZz0j2EhzS0jaCCCOkHYvdhk9iAdiuOqwaCpbaaMO3OGT29Dhn2bFE8Y4PZI7vpyZWbdUACUfu7HdnkUnxY4upcL4Sx2XqiBb3h2jI3yIO4g7Ct/g4O25XTa6eDEJ/kafmfU+qFdHAMXLSM1ydIbNZTgCwLqg9toVzqSYgjNamX1KtusnFRTOZtNrt6VG6KM8R3/B3r5YHidrAldXWaXmxHMM72N/v9K1NM14yzk5RtG5ZsulUxBzWvGqHbHm4I+bfLI2yzXgssWaqJjwKOHcni+ZNQQN4FXJf1hWeqt4F+If4r2uRWkvK0IiIgiIgIiICIiAq64UT3zeo360KxVXPCntbt8GzPk8KFZ3FiAxRue4NaLk3yyAsBckk5AAAkk5AAkrwS4rQNPcziGzK0Tax1O23JrNGY52tI3XXx0lqXMoJyw2Ms1NBIRtELmzSObfc50UfktyqCMi129406zQS8620cmXJZdMrbdRFlGMNDdUsLHDWjfGQ6N7b21muG0XB5wQQbFfMlR7Qyod3CVjj3jJozFzOex4eB06rD+6u6XLWN3FbErUuWpctS5aGSV0ad1psOPzK/1QLlEr1VU2qcOdzVo8ohWM/BYFFKuvC9RPDqq4C79NMgxjOBU1SPlWWk2NmZ3sre3lHMbhQfF9Gqmnu5o+EQj8uNp7o0fPj29ov2KwjIvk6osrDakdKZGujpS0g9/Ug25xDb7VzKWikdsbYeM+zG+UqS6aYhGcRlELWt1I2NlLQBrTXJc7psWA9C48ji4EE7VL2V94aiGE9/KZHD8mFtwOl7rDyAr3QaTuLmtjijjabNLnF0shBPjGzR2NURmFnFp2hfeld/sRyZf8KckWjTzExl1+M0E8u708684C0wyW8NxzW6CdYeiy+tl0Mu0q4F+I7+K9rkVpKreBfiO2/+1nyf+ZIrSXmWiIiIIiICIiAiIg5mkFa6GF0jHMa5gLrPbrtcACbEAg8ltvKq500xCaengmmjjj7pEx7Ax7nEgyjaC0W5OU7V2eEWrzI8UAei/wDm9CjuldO6OkpGuc4n4LEbON7a04dl2OA7AmP9RUQlDXMkikaXxSt1ZGg6rsiC1zTyOaQCDbeNhKi79FWh2VT3m4wyiW26wu2/7ykpK1JXe4yj4UVMyNjY4wWxtuRrW13vO17rZXtkByZ719yVqXLUlWTQ2LlqStS5akqjJKzjzrR4ceer9UK+ZKzpB4LD/wCL9UKxn4O7gVXcBSykmVc4JPZ1lN6CXIKo7wkyXJx/E208EsztkbSQPGdsa3tJA7V6u65KuuE3Fr9zpmn9rL6Qwes9gWd6EJp5nOlL3m75C5zzvc43J8pK7MAXCgNntPOFJ4IVmDxYnRXbrgZt284XNYD9qmlPTgixGRyKj2IYeYpCLd6eKUEp0auadpt3pDQDyazS9hHkY09q6tlyNEi74O5p4rZXao3EtbrfYu0AukvxKlHAt4KTpn9rlVnKruBgnVdnl+NXHIfxyS3986tFcFEREBERAREQERefEZdWKR2whpDT845D0kIKx0oeZ6lkbT4WVrW9Dn3HoK9XCszVDABZoiYG7rCZosvno7F3bFIzbvYg+U81hZvpIXo4XuKzqD65qYdxpV5K1JWCVqSvSjYuWhKwStSUGSVqSsErUlBklfXHvA4f/F+qFeclejG/A4f/ABnqhWM/B5KR+q4FTvCn6zQQoExqlmjFT+SUR3qyoDGOc42a0FzjuAFyqVxWsdNPJK7a9xIG4bAOwWHYrD4Q8SDYmwNPfS5v5mA7O027AVXAjKzR8wp3Rw60bHDlaD6FDWQKeaLC8LAeS7fIVIPXRQL64thPdI9mYXXpqUXXagpQRmFoQzBaXucABFi573H0N/yL3WXuxSEMeGjYGj0ucftXkAWojv8AAyDqvyy/GrnkH45J/fYrRVZcC/g5etUe2SqzVwUREQEREBERAXF0sqNSnI8Y+gC/r1V2lDOECqs0N3Nv5Tn/AIW+VSrHk4M6fWkq5z8yJp/md9i8nC/xGdRv1zVI+Dul1KGNx2zOfKe02HoAUb4YeIzqN+uarj3BVRK1JWCVqSvSM3WpKxdakoNiVqSsErUlBklezFx8lh38Z6oV4SV0MRHyWHdFZ6oVjPweQBeyhqNR2tuXnIXylJtqja7Ifb6ER5MTldPK6R2dzlzNGz++dfGOkXVbTDcvoIVBzmUykGjh1QR86/lH+y8PcV66HvT5FBOaIXAXXgGS4GETXAUkhZdUR3GTeZ/Nqj+ULxAL2YlnNJ1iPJl9i8wC1Ed7gY8HL1qj2yVWaqy4GOJL1qj2yZWauCiIiAiIgIiICq/T+p1pXtHK7UA57hn2X7VZs0ga1zjsaC49AF1VrIzPiVPGc7SB7+cRi59SlWLMw2m7lDFEPzcbGeRoBVe8MfEb1G/XNVlqs+GXwbeo365i1j3CKlJWCVqStSV6BsSsErW6wSgySsErBKxdBm66dd4PDuis9UK5S6tb4PDuis9UKxn4Pi5bUcOs4u5B3o6eX7PSsP5sycgN5XbpaPVaBu2855T5VDTxiFbdxXRFOtxSoacvuKGOwPRfyZrq/BeZaml5N9x5ckR9cBqcwFYuHQXaCqmwyQte3pCubA23haVdIgVZnJId73n+Yr5AL6OzJO8krAC0OvwM8SbrVHtkqs1VlwM8SbrVHtkys1edRERAREQEREHN0gn1Kd532HZtPoBUK4P4e6V00xzEUeqDuc8/cCu9p5U6sTW7ySebd/mXn4Maa1NLMds0zrdVgsPWVPV8TFVlwzeDb1G/XsVmqseGjwbeo369i1O4RUJKwStbrF16BtdYusXWEGVhLrF0GV1qzweHdFZ6oVx116vwWHdFZ6oVjPwezBqTXk1jxY8/3js+09gUlZTrGCUHc4W3HfO79/Sdg7BYLoiNFeQQLYQL2Bi3Eag8BgWDCuh3NY7kiIZNHqyuG55A6L5K5MDdai1t0bneRpVW4vDaVzhsu0/yhWRhE3/bHn9i8eVpH2rd/nbKG2WQFvqpqqDo8DXFm61R7ZMrMVZ8DfFm61R7ZMrMXBRERAREQEREFecIlX3zh4oDfIL+txUu0Vo+40VNHyiNrndZ3fH0lV7j5NRVxRD87M0dAc659atZosABsGQUi1lVhw0+Db1G/XsVnqsOGrwTeo369i1O4RTywSsXWF6Bm6wi1IQbLC11VjVQbqS0NOJHYW13FHw17ucNEJt2myjAapno5Dry4a39liB9ECxn4JNLXxt4xt2Lxv0gphteexjz6gujV4S22y/SuPUYYBsbbsRX2bpHTb5PMy/cvszSGnPLJ5p/3LiS0RC0bTpoSMY1AeV/0HLMuLRWyLhvu0hcaOLJeHEJxxQoV05KqKYuDHaxsMrEHK99u1S/BZ7Yc9p5m9heFCNF6ZombK8jVacgDy86sHFamEx6sQALrF4bkFqX4xUfsgC3ISyg9XA3xZ+tUe2TKzFWfA5xZ+tUe2zKzFxUREQEREBeXE5dSGRx8W27N3ej1r1LhaYVGrBblcTfoA+8tSiH6Kxd2xQOOyFkkuy+Zs1vRt9Cs1QPgxp7mqnPK5sTDzAXd6SFPFItFV/DV4JvUb9exWgqu4az8m3qN+vYtTuEU6sIsL0DKwiICLCIMqeaFNvUYaP2OI+qnUCU/wBBXgVOGk7O44j6qdYz8FhyU3MvFPQ35F0pqwcjfL9y5VbWvOw26MlFcuvpGMF3kNHziAo7VYhE3ihzzzDVHlP3LpYgy9yTc7zmVHaxoBKuxpPib3ZABo5sz5V8YY7nWdfV33zPQvi4gbc+b71tE2SRzWMF3ONgP72BRl2cMjdK8MZ3rW2LyPyW7un++RSsCwsNgFrLzYXQNhjDBmdsjuVzvu5AvVZaRqlltZAFB9uBzZP1qn22ZWYqz4HDlP16n22ZWYuKiIiAiIgKGcIlTqsA3NuO0m/+EKZqP6R6P/CpYNY2hbc1GeZDSCxrekl1zuClWGglF3KhhuLOkvM7pebj0WUgWGtAAAFgAAANgAWVUFV/DZ4JvUb9exWgoRwj6Nz1rQyFpPydtYGOweJmOsQ57ci0OzF9is7WKBWFPPiqxHxR5YfeLX4qcR8UfSh94uvPEQW6XU6+KnEfFH0ofeLHxVYl4g+lD7xOcEFuinXxVYl4g+lD7xPiqxLxB9KH3ic4IMpxok602Gn9liHqgW3xVYl4g+lD7xdM6CYnHHTOhbqzU/whpu2CVr2SiLMDuoNwWHJZyyl0JBU1gC49XiAXjbovjsht3o5bugiaPL3ZZOhGO74PNw++U5QeSoqHu2ZLlVDc97uXcP8Add92g+O2teEX5RHDf65fFvB/jY/QnpZD71OUEfZTk8hKlmAYV3Juu4fKOGzxG7unetIdDMdaQQKfLfHD75en8G9Id9P5uH3yvKI6Nksuf+DekO+n81D75Pwa0h30/moffJzhp0LLIC534NaQ76fzUPvlsNGtIPGp/Mw++TnDTpcDuyfr1PtsysxQjg40cqaMPbUA6zmuc5/yYa6R88khDWte7IBw22U3XMEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z' },
        ].map((phone) => (
          <div key={phone.name} style={styles.itemContainer} onClick={() => handleSelectItem(phone.name)}>
            <img 
              src={phone.img} 
              alt={phone.name} 
              style={selectedItems.includes(phone.name) ? styles.selectedImage : styles.image} 
            />
            <p style={styles.itemText}>{phone.name} - {phone.price}</p>
          </div>
        ))}
      </div>
      <div>
        <button style={styles.backButton} onClick={handlePrevious}>
         Go to Iphone Page
        </button>
        <button style={styles.nextButton} onClick={handleNext}>
          Total Selected Phones
        </button>
      </div>
    </div>
  );
};
const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
  },
  pageTitle: { 
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#333'
    },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#555',
    marginBottom: '20px' 
    },
  imagesContainer: { 
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '30px'
    },
  itemContainer: {
    textAlign: 'center',
    cursor: 'pointer' 
    },
  image: { 
    width: '200px',
    height: '200px',
    borderRadius: '8px',
    transition: '0.3s ease'
   },
  selectedImage: { 
    width: '150px',
    height: '150px',
    borderRadius: '8px',
    transform: 'scale(1.1)',
    opacity: '0.7',
    transition: '0.3s ease'
   },
  itemText: { 
    fontSize: '1rem',
    fontWeight: '500',
    marginTop: '10px' 
   },
  nextButton: { 
    padding: '12px 24px',
    fontSize: '1rem',
    backgroundColor: '#2196f3',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginLeft: '10px',
    transition: '0.3s ease' 
  },
  backButton: { 
    padding: '12px 24px',
    fontSize: '1rem',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s ease'
   },
};
export default Page2;
