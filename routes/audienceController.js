// audienceController.js
const Customer = require('../models/customer');

const buildQuery = (rules, logicalOperator) => {
  const query = [];
  rules.forEach(rule => {
    const condition = {};
    if (rule.operator === 'gt') {
      condition[rule.field] = { $gt: rule.value };
    } else if (rule.operator === 'lt') {
      condition[rule.field] = { $lt: rule.value };
    } else if (rule.operator === 'eq') {
      condition[rule.field] = rule.value;
    }
    query.push(condition);
  });

  if (logicalOperator === 'AND') {
    return { $and: query };
  } else if (logicalOperator === 'OR') {
    return { $or: query };
  }

  return query;
};

exports.createAudience = async (req, res) => {
  try {
    const { rules, logicalOperator } = req.body;
    const query = buildQuery(rules, logicalOperator);
    
    const audience = await Customer.find(query);
    const audienceSize = audience.length;

    res.status(200).json({ audienceSize, audience });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create audience' });
  }
};
