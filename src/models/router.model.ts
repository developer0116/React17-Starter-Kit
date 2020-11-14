export interface IRoute {
  uuid: string;
  path: string;
  exact: boolean;
  component: React.FC;
  isPrivate: boolean;
}
