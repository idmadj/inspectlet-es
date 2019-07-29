declare module 'inspectlet-es' {  
  interface InspectletES {
    install(id: number): void;
    push(args: any[]): void;
  }

  const InspectletES: InspectletES;
  export = InspectletES;
}
