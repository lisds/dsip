# Vector projection

This here page follows the discussion in [this Khan academy video on
projection](https://www.khanacademy.org/math/linear-algebra/matrix_transformations/lin_trans_examples/v/introduction-to-projections).
Please watch that video for a nice presentation of the mathematics on
this page.

For the video and this page, you will need the definitions and
mathematics from [on vectors](on_vectors).

## Start

Consider two vectors $\vec{w}$ and $\vec{v}$.

![vector projection](images/vector_projection.svg)

We can scale $\vec{v}$ with a scalar $c$. By choosing the correct
$c$ we can create any \vector on the infinite length dotted line in the
diagram. $c \vec{v}$ defines this infinite line.

We\'re going to find the projection of $\vec{w}$ onto $\vec{v}$,
written as:

$$
\mathrm{proj}_\vec{v}\vec{w}
$$

The projection of $\vec{w}$ onto $\vec{v}$ is a vector on the line $c
\vec{v}$. Specifically it is $c \vec{v}$ such that the line joining
$\vec{w}$ and $c \vec{v}$ is perpendicular to $\vec{v}$.

## Why is it called projection?

Imagine a light source, parallel to $\vec{v}$, above $\vec{w}$. The
light would cast rays perpendicular to $\vec{v}$.

$\mathrm{proj}_\vec{v}\vec{w}$ is the shadow cast by $\vec{w}$ on the
line defined by $\vec{v}$.

## Calculating the projection

The \vector connecting $\vec{w}$ and $c \vec{v}$ is $\vec{w} - c
\vec{v}$.

We want to find $c$ such that $\vec{w} - c \vec{v}$ is perpendicular
to $\vec{v}$.

Two perpendicular vectors have [vector dot product of
zero](on_vectors#orthogonal-dot) so:

$$(\vec{w} - c \vec{v}) \cdot \vec{v} = 0$$

By distribution over addition of dot products:

$$\begin{aligned}
(\vec{w} - c \vec{v}) \cdot \vec{v} = 0 \implies \\
\vec{w} \cdot \vec{v} - c \vec{v} \cdot \vec{v} = 0 \implies \\
\frac{\vec{w} \cdot \vec{v}}{\vec{v} \cdot \vec{v}} = c
\end{aligned}$$

Because $\| \vec{v} \| = \sqrt(\vec{v} \cdot \vec{v})$:

$$c = \frac{\vec{w} \cdot \vec{v}}{\\| \vec{v} \|^2}$$

So:

$$\mathrm{proj}_\vec{v}\vec{w} =
\frac{\vec{w} \cdot \vec{v}}{\\| \vec{v} \|^2} \vec{v}$$

We can also write the projection in terms of the unit \vector defined by
$\vec{v}$:

$$\begin{aligned}
\hat{u} \triangleq \frac{\vec{v}}{\\| \vec{v} \|} \implies \\
\mathrm{proj}_\vec{v}\vec{w} =
\frac{\vec{w} \cdot \vec{v}}{\\| \vec{v} \|} \vec{u}
\end{aligned}$$

$\frac{\vec{w} \cdot \vec{v}}{\| \vec{v} \|}$ is called the [scalar projection]()
of $\vec{w}$ onto $\vec{v}$.

## Also see

* [wikipedia on \vector
  projection](https://lisds.github.io/dsip/algebra_of_sums.html)
* [On vectors](on_vectors)
