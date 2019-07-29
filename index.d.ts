declare module 'inspectlet-es' {  
  declare function InspectletES(args: any[]): void;
  declare namespace InspectletES {
    export function install(id: number): void;
  }

  const InspectletES: InspectletES;
  export = InspectletES;
}
