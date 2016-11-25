from setuptools import setup, find_packages

version = '2.0.0.dev0'

setup(name='collective.infinitescroll',
      version=version,
      description="Traverse to first item in folder",
      long_description=open("README.rst").read() + "\n" +
                       open("CHANGES.rst").read(),
      classifiers=[
          "Framework :: Plone",
          "Programming Language :: Python",
      ],
      keywords='plone view',
      author='Johannes Raggam, Peter Holzer',
      author_email='dev@bluedynamics.com',
      url='http://github.com/thet/collective.infinitescroll',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['collective'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'Products.CMFPlone',
      ],
      entry_points="""
      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
