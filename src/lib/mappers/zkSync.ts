const mapContractInfo = (data: any) => {
  const { sources } = data.request.sourceCode;
  return Object.keys(sources).reduce((acc: { [key: string]: any}, filePath: string) => {
    acc[filePath] = sources[filePath].content;
    return acc;
  }, {})
}

export default {
  mapContractInfo
};