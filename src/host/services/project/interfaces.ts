import { Observable } from "rxjs/Observable";

export interface IProjectFile{
  id: string;
  name: string;
  folder: string;
  modified: boolean;
  source?: string;
  hash?: {
    file: number,
    current: number
  };
};

export interface IProjectFolder {
    id: string;
    name: string;
    folder: string;
    subfolders: IProjectFolder[];
    files: IProjectFile[];
};

export interface IProjectInfo {
  uid: number,
  folder: string;
  selected?: string;
  projectfolder: IProjectFolder;
};

export abstract class IProjectService {
  abstract get changed(): Observable<boolean>;

  abstract getProjectInfo(): IProjectInfo;
  abstract setSelected(id: string): boolean;
  abstract getFileSource(fileid: string): { hash: number, data: string }
  abstract setFileSource(fileid: string, source: string): number;
  abstract saveFile(fileid: string) : void;
  abstract saveAll(): void;
  abstract close(): void;

  abstract loadFromFile(filename: string): void;
  abstract loadFromFolder(folder: string): void;
}
