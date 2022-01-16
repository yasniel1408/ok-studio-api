import lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import json from './db.json';

class DbService {
  private db: lowdb.LowdbAsync<any>;

  constructor() {
    this.initDatabase();
  }

  private async initDatabase() {
    const adapter = new FileAsync('db.json');
    this.db = await lowdb(adapter);
    await this.db.defaults(json).write();
  }
}

export default new DbService();

// interface Status {
//   key: string;
//   username: string;
//   status: 'UP' | 'DOWN' | 'COOLING' | 'SUSPENDED';
// }
// interface Clients {
//   key: string;
//   status: boolean;
//   username: string;
//   password: string;
// }
// interface SessionStates {
//   key: string;
//   session: Object;
// }
// interface Database {
//   clients: Array<Clients>;
//   status: Array<Status>;
//   sessionStates: Array<SessionStates>;
// }
// const adapter = new FileSync<Database>('db.json');
// const db = low(adapter);
// db.defaults({
//   clients: [],
//   status: []
// }).write();

// export default db;
