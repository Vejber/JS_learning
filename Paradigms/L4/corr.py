import numpy as np
import matplotlib.pyplot as plt

a = np.array([-7, -3, 5, 3, 7])
b = np.array([2, 3, 6, 7, 5])
result = np.corrcoef(a, b)

print(result)
