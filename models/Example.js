module.exports = (sequelize, DataTypes) => {
  const Example = sequelize.define('table_name', {
    field: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    secondField: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Example;
}