﻿using Gym.Models.Equipment.Contracts;
using Gym.Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Gym.Repositories
{
    class EquipmentRepository : IRepository<IEquipment>
    {
        private List<IEquipment> models = new List<IEquipment>();
        public IReadOnlyCollection<IEquipment> Models => models.AsReadOnly();

        public void Add(IEquipment model)
        {
            models.Add(model);
        }

        public IEquipment FindByType(string type)
        {
            return this.models.Find(f => f.GetType().Name == type);
        }

        public bool Remove(IEquipment model)
        {
            return models.Remove(model);
        }
    }
}