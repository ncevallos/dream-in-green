import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { useAuth } from '../states/userState';
import nicknames from '../assets/nicknames';



const Profile = () => {
  const { logout, user, usersCollection, profilePic, uploadProfilePic } = useAuth();
  const redirect = useHistory();


  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [last, setLast] = useState('');
  const [avg, setAvg] = useState(0);
  const [scores, setScores] = useState(null);
  const [cuteName, setCuteName] = useState('');

  function handleLogOut() {
    logout();
    redirect.push('/');
  }

  useEffect(() => {
  
    usersCollection
      .doc(user.uid)
      .get()
      .then(function (doc) {
        if (doc.data().scores) {
          let arr = doc.data().scores.reverse();
          setScores(arr);
          setLast(
            month[arr[0].createdAt.toDate().getMonth()] +
              ' ' +
              arr[0].createdAt.toDate().getDate() +
              ', ' +
              arr[0].createdAt.toDate().getFullYear()
          );
          var sum = 0;
          for (var i = 0; i < arr.length; i++) {
            sum = sum + arr[i].score;
          }
          const const_avg = (sum / arr.length).toFixed(2);
          setAvg((sum / arr.length).toFixed(2))

          nicknames.forEach(function (nickname, index) {
            if(const_avg >= nickname.bottom){
              setCuteName(nicknames[index].name);
            }
          });
            

        } else {
          setScores(undefined);
          setLast('N/A');
        }


        setName(doc.data().firstName + ' ' + doc.data().lastName);
        setSchool(doc.data().school);
        
      });
  }, []);

  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const htmlOfScores =
    scores !== null && scores !== undefined
      ? scores.slice(0, 9).map((score, i) => {
          return (
            <tr key={i}>
              <td>{scores.length - i}</td>
              <td>
                {month[score.createdAt.toDate().getMonth()]}{' '}
                {score.createdAt.toDate().getDate()},{' '}
                {score.createdAt.toDate().getFullYear()}
              </td>
              <td>{score.score}</td>
            </tr>
          );
        })
      : '';

  return (
    <div className='container mw-100'>
      <div className='row profile-container'>
        <div className='col m-3 profile-user-col'>
          <Card className='profile-card' border='primary'>
             <div className='profile-imagecontainer'>
            <Image
              className='profile-image'
              src={profilePic}
              roundedCircle
            />
            </div>
            <input 
              type='file'
              className='mt-2 mb-3 text-primary'
              onChange={uploadProfilePic}
            />
            <h3 className='mt-2 mb-3 text-primary'>{name}</h3>
            <h5 className='mt-2 mb-3 text-primary'>Current Level: {cuteName}</h5>
            <button
              type='button'
              className='btn btn-primary py-2 px-5 mb-3'
              onClick={handleLogOut}
            >
              Log Out
            </button>
            <Card.Text className='profile-card-text'>
              <strong>Email:</strong> {user.email}
              <br />
              <strong>School:</strong> {school} <br />
            </Card.Text>
            <Card.Text className='profile-card-text'>
              <strong>Last Survey Taken:</strong> {last}
              <br />
              <strong>Total Survey's Taken:</strong>{' '}
              {scores ? scores.length : 0}
              <br />
              <strong>Average Score:</strong> {avg} points
              <br />
            </Card.Text>
            <div className='profile-center-container'>
              <Link
                to='/questionnaire'
                className='btn btn-primary py-2 px-5 mb-3'
              >
                Take Survey
              </Link>
            </div>
          </Card>
        </div>

        <div className='col m-3 profile-table-col'>
          <Card className='profile-card' border='primary'>
            <h3 className='mb-0 text-primary'>Survey History</h3>
            {scores && (
              <Table striped borderless hover className='mb-0'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>{htmlOfScores}</tbody>
              </Table>
            )}
            {scores === undefined && <h1>No scores</h1>}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;