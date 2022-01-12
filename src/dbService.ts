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
