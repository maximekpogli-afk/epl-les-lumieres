declare module "better-sqlite3" {
  interface Database {
    pragma(arg: string): void
    exec(sql: string): void
    prepare(sql: string): { run(...args: any[]): any; all(...args: any[]): any[]; get(...args: any[]): any }
    close(): void
  }
  interface DatabaseConstructor {
    new(path: string): Database
  }
  const Database: DatabaseConstructor
  export default Database
}
