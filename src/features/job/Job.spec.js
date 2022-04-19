import jobReducer, {
  add, setFilter,
} from './JobSlice';
import Data from './Jobs.Data'

describe('jobs reducer', () => {
  const initialState = {
    jobs: [], // array of jobs
    jobHighlights: [],
    status: 'idle',
    filter: '',
  };

  it('should handle add', () => {
    const actual = jobReducer(initialState, add({ payload:  
      Data.createJob( "match","Web Developer, Mobile (IC)",
        "Match.com",
        "(Remote) Dallas, TX",
        "/logo192.png",
        2015, 4,
        2016, 12,
        "I augmented the mobile web team staff as a web developer to assist the staff in achieving company objectives and improving the scalability of their web products.",
        [
            "My duties included diagnosing performance issues in various parts of the application.",
            "Lead the team in delivering the product from a Continous Integration pipeline.",
            "I lead internal teams in the diagnosis and resolution of issues encountered in production, as well as the implementation of new features and products on Match.com’s family of web properties.",
        ],
        "React, Redux, Javascript, JQuery, Bootstrap, .NET, iOS, Android, ASP.NET, .NET Core, SQL Server, ASP.NET MVC, ASP.NET API, Javascript, Jenkins, C#",
      ),    
    }));

    expect(actual.jobs.length).toEqual(1);
  });


  it('should handle filter', () => {
    const actual = jobReducer(initialState, setFilter('Abc'));
    expect(actual.filter).toEqual('Abc');
  });
});
